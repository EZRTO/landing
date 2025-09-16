FROM nginx:alpine

# Remove default config and default html
RUN rm /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Copy built Next.js static files
COPY out /usr/share/nginx/web

# Optional: Debug logging and custom logs
RUN sed -i \
    -e 's+"$http_user_agent" "$http_x_forwarded_for"+$sent_http_location $request_filename+g' \
    -e 's+error.log notice+error.log debug+g' \
    /etc/nginx/nginx.conf

# Expose port
EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
