# websockets-on-asm
sample code for a node.js websockets service exposed via an Anthos Service Mesh's ingress gateway, and a locally run "client" browser app

note: if trying this yourself, make sure you update the IP address in `client-app\example\app.js` to your own environment *and* you'll have to reference your own container image in `ws-service/k8s/deployment.yaml`, since the URI of the container image is locked down to my GCP project and clusters within it