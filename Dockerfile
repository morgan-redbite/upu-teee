# ---------
# BASE IMAGE: build stage
# ---------
    FROM node:18-alpine AS builder
    WORKDIR /app
    
    # install deps
    COPY package*.json ./
    RUN npm ci
    
    # build app
    COPY . .
    RUN npm run build
    
    # ---------
    # PRODUCTION IMAGE: serve built files
    # ---------
    FROM nginx:stable-alpine
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # optional: copy a custom nginx.conf if you need SPA routing
    # COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    EXPOSE 80
    CMD ["nginx", "-g", "daemon off;"]
    