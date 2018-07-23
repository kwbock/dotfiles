# kubectl
kgrep() {
  kubectl get pods | grep $@
}

krails() {
  kexec $1 rails c
}

kexec() {
  kubectl exec -it $@
}

klogs() {
  kubectl logs -f $1
}
