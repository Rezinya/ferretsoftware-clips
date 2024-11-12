# Based on VOD Ripper script by TunedDownGuitar

. ".\logging.ps1"

# Output Path
$DownloadDirectory = "D:\github\Twitch\"

if(!(Test-Path $DownloadDirectory)) {
    New-Item -ItemType Directory -Path $DownloadDirectory -Force | Out-Null
}

# Twitch credentials
$RequestHeaders = @{
    "Authorization" = "Bearer $(Get-Content -Raw .\accessToken.txt)"
    "Client-Id" = Get-Content -Raw .\clientId.txt
}

# Twitch Broadcaster ID for FerretSoftware
$ChannelId = "884338173"

function Invoke-TwitchRequest {
    param(
        [Parameter(Mandatory)]
        [string]$RequestURL
    )

    Write-Log "Invoking GET Request to $($RequestURL)"

    try {
        $Response = Invoke-RestMethod -Method GET -Uri $RequestURL -Headers $RequestHeaders
    }
    catch {
        Write-Log -LogLevel "Error" -Message "Failed to invoke GET Request to $($RequestURL)"
        Write-Log -LogLevel "Error" -Message "$($_.Exception.Message)"
        $Response = $NULL
    }
    return $Response
}


Write-Log "Begin clip data retrieval..."

$BaseClipURL = "https://api.twitch.tv/helix/clips?broadcaster_id=$($ChannelId)&first=100"

$Response = Invoke-TwitchRequest -RequestURL $BaseClipURL

# Filtering out unnecessary properties and saving as CSV
$Response.data | Select-Object -Property id,title,created_at,url,thumbnail_url,creator_name,view_count,duration | `
    Export-Csv -Path ($DownloadDirectory + "\$(Get-Date -Format "yyyy-MM-dd")-clip-data.csv") -NoTypeInformation

$PageCursor = $Response.pagination.cursor

while($PageCursor) {
    $PageClipURL = ($BaseClipURL + "&after=$($PageCursor)")
    $NextPage = Invoke-TwitchRequest -RequestURL $PageClipURL

    $NextPage.data | Select-Object -Property id,title,created_at,url,thumbnail_url,creator_name,view_count,duration | `
        Export-Csv -Path ($DownloadDirectory + "\$(Get-Date -Format "yyyy-MM-dd")-clip-data.csv") -NoTypeInformation -Append
    
    # Update cursor
    $PageCursor = $NextPage.pagination.cursor
}