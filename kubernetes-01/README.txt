Ahhoz, hogy private docker repository-ból lehessen image-t lehúzni a következő parancsot kell kiadni

kubectl create secret docker-registry dockerhub-secret \
    --docker-server=<DOCKER_REGISTRY_SERVER> \
    --docker-username=<DOCKER_USERNAME> \
    --docker-password=<DOCKER_PASSWORD> \
    --docker-email=<DOCKER_EMAIL> 


vagy egy yaml-fájlba is becsomagolhatjuk a dockerconfigunkat

---------
apiVersion: v1
kind: Secret
metadata:
  name: dockerhub-secret
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: <base64-encoded-docker-config-json>
---------

Ezután a kubernetes workload-okban(Pod, Deployment, StatefulSet stb.) be kell hivatkozni imagePullSecret-ként a létrehozott secret-et
