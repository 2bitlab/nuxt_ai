
FROM nginx:1.16.1

COPY ./deploy-tcloud/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./deploy-tcloud/nginx/dev.prompt-lab.online.conf /etc/nginx/conf.d/dev.prompt-lab.online.conf
COPY ./deploy-tcloud/nginx/uat.prompt-lab.online.conf /etc/nginx/conf.d/uat.prompt-lab.online.conf
COPY ./deploy-tcloud/nginx/prompt-lab.online.conf /etc/nginx/conf.d/prompt-lab.online.conf
COPY ./deploy-tcloud/nginx/cert /etc/nginx/cert
EXPOSE 80

ENV TZ Asia/Shanghai
