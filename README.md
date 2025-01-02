# Mini counting app
Literally just counts up.

## Instructions for minikube deployment
- Start minikube cluster
- Run `eval $(minikube docker-env)` in a terminal
- In the same terminal, build the image tagged as minicounter:latest
- Apply with `kubectl apply -f templates/minicounter.yaml`

Enjoy experiencing the wonder of numbers
