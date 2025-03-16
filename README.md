# Todolist

A todo list application to experiment with.

## Notes on migrating the app

The application's microservices are packaged as helm charts.

Helm install command:

```
helm upgrade --install db db/chart
helm upgrade --install server server/chart
helm upgrade --install client client/chart
```

To build images locally: `docker build -t rinkiyakedad/todolist-client --platform=linux/amd64 .`
