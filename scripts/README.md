# Scripts

Powershell scripts to automate getting clip data.

## Get Clips

Sends requests to Twitch API and saves the response as a CSV to easily upload and update the database.

### Configuration

- Set `$DownloadDirectory` variable
- Create an `accessToken.txt` in the same directory that contains your OAuth token
    - Info on getting a token can be found on the [Authentication page](https://dev.twitch.tv/docs/authentication/)
- Create a `clientId.txt` in the same directory that contains your app's Client ID

## Logging

The Get Clips script includes a simple logging function that writes to both the console and to a log file.

Location of the log file can be configured by changing the `$FilePath` variable.