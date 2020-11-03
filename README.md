# startup
1. `./all.sh up -d mysql`
2. `./all.sh exec db`
3. `MYSQL_PWD=strapi mysql --ssl-mode=disabled --user=root -h mysql strapi < /assets/dump.sql`
4. exit db container and run `./all.sh up -d` 
5. wait ( first run may take upto 15 minutes !) - to see progress run `./all.sh logs -f strapi`

# data backup
to backup data:

1. `./all.sh stop strapi`
2. `./all.sh exec db`
3. `mysqldump --ssl-mode=disabled --user=root --password=strapi -h mysql strapi > ./assets/dump.sql`
4. `MYSQL_PWD=strapi mysql --ssl-mode=disabled --user=root -h mysql strapi < /assets/dump.sql`
5. `./all.sh start strapi`
# graphql
http://localhost:1337/graphql

before making any request, you need to get auth token:

1. `./all.sh exec strapi bash`
2. `node getToken.mjs`
3. grab token and put it into "Authorization" header like so <pre>{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA0NDE4NjYyLCJleHAiOjE2MDcwMTA2NjJ9.vZCVhr6zjfpjRkdYM_pR_KUMFXsKwvH5qylUE9vjHhk"}</pre>
4. alternatively you can make POST request to `http://localhost:1337/auth/local` with data: <pre>identifier: 'api@spinbits.io',
password: 'RE}C2fzd-[JW%-Wh'</pre>

# login
generic admin account: 
<pre>
login: admin@spinbits.io
pass: v.Q;CVQW4z^DRU.]
</pre>
