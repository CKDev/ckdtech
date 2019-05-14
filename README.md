# CKD Technology Partners

The home of the [ckdtech.co](https://www.ckdtech.co) site.

## Config

All sensitive config data is stored as config variables within the appropriate Heroku application (under Settings)

If the SMTP information needs to be changed it can be done so by changing the `SMTP_USERNAME` and `SMTP_PASSWORD` variables within Heroku. The `SMTP_USERNAME` is simply the login email of your Google account, i.e. - `bill@gmail.com`. The `SMTP_PASSWORD` is NOT the gmail user's login password, but instead an app password used specifically for purposes like this. Follow [this link](https://support.google.com/accounts/answer/185833?p=InvalidSecondFactor&visit_id=636880083620288675-3161662775&rd=1) for instructions on how to create an app password.

## Local Development

```
docker build -t latest .
docker run --name ckd -e SMTP_USERNAME=<SMTP_USERNAME> -e SMTP_PASSWORD=<SMTP_PASSWORD> -e NONCE_SECRET=<NONCE_SECRET> -e PORT=8080 latest
```

## Deployment

From the root directory, run the following commands to build the docker container and push to the appropriate Heroku app:

```
docker build -t latest .

// For deployment to staging
heroku container:push web --app ckd-staging
heroku container:release web --app ckd-staging

// For deployment to production
heroku container:push web --app ckd-production
heroku container:release web --app ckd-production
```