# Mini counting app
Literally just counts up.

## Instructions for minikube deployment
- Start minikube cluster
- Run `eval $(minikube docker-env)` in a terminal
- In the same terminal, build the image tagged as minicounter:latest

### Simple kubectl deployment
- Apply with `kubectl apply -f templates/minicounter.yaml`

### Helm deployment
- Create deployment with `helm install minicounter --namespace minicounter --create-namespace ./helm`
- (Optional) Update deployment after changes with `helm upgrade minicounter --namespace minicounter ./helm`

Enjoy experiencing the wonder of numbers
