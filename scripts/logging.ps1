# Path to log file
$FilePath = "D:\github\Twitch\log"

if(!(Test-Path $FilePath)) {
    New-Item -ItemType Directory -Path $FilePath -Force | Out-Null
}

$LogFile = $FilePath + "\$(Get-Date -Format "yyyy-MM-dd").log"

function Write-Log {
    param(
        [Parameter(Mandatory)]
        [string]$Message,

        [Parameter()]
        [ValidateSet("Info", "Warning", "Error")]
        [string]$LogLevel
    )

    switch ($LogLevel) {
        "Info" {
            $Color = "White"
            $Type = "INF"
        }
        "Warning" {
            $Color = "Yellow"
            $Type = "WRN"
        }
        "Error" {
            $Color = "Red"
            $Type = "ERR"
        }
        default {
            $Color = "White"
            $Type = "INF"
        }
    }

    $Content = "[$($Type) | $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")] $($Message)"

    Write-Host -ForegroundColor $Color $Content | `
        Add-Content $LogFile -Value $Content
}