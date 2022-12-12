FROM debian:latest

RUN  apt-get update && \
  apt-get install -y wget && \
  # Download and install the ARM64 debian package
  wget -q https://honeycomb.io/download/honeytail/v1.8.2/honeytail_1.8.2_arm64.deb && \
  echo 'c5a03a2ef4b850be35fb3809173efd3d6e8b16c52b770f61691355b7d39505b0  honeytail_1.8.2_arm64.deb' | sha256sum -c && \
  dpkg -i honeytail_1.8.2_arm64.deb

COPY start_honeytail.sh /start_honeytail.sh

ENTRYPOINT /start_honeytail.sh
