## Docker Quickstart

- Runs a simple node server that returns a randomly selected year
- Runs an nginx reverse proxy
- Runs honeytail to grab nginx logs and send to Honeycomb

```
export HONEYCOMB_API_KEY=<your-api-key>
docker-compose up --build

# Run a curl loadtest 10 times
./loadtest.sh 10
```
