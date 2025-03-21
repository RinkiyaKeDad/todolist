# Todo List Application

A todo list application designed for experimentation and learning.

## Deploying on a Kubernetes cluster

The application is built using a microservices architecture, with each service packaged as a Helm chart.

To deploy the application, use the following Helm commands:

```bash
helm upgrade --install db db/chart
helm upgrade --install server server/chart
helm upgrade --install client client/chart
```

## Building Docker Images Locally

To build Docker images locally, run the following command from the respective service directory:

```bash
docker build -t rinkiyakedad/todolist-<client/server> --platform=linux/amd64 .
```
