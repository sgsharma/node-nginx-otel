const process = require('process');
const grpc = require('@grpc/grpc-js');
const opentelemetry = require("@opentelemetry/sdk-node")
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node")
const { OTLPTraceExporter } =  require('@opentelemetry/exporter-trace-otlp-grpc')

const metadata = new grpc.Metadata();
metadata.set('x-honeycomb-team', 'Dxj8cohO3tE6AifelvEJ8K');

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'tracing-demo',
  }),
  traceExporter: new OTLPTraceExporter({
    url: "https://api.honeycomb.io:443",
    metadata,
  }),
  instrumentations: [ getNodeAutoInstrumentations() ]
})

sdk.start()
  .then(() => console.log('Tracing initialized'))
  .catch((error) => console.log('Error initializing tracing', error));

process.on('SIGTERM', () => {
  sdk.shutdown()
    .then(() => console.log('Tracing terminated'))
    .catch((error) => console.log('Error terminating tracing', error))
    .finally(() => process.exit(0));
});
