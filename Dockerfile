FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/prostate /usr/share/nginx/html
EXPOSE 80
