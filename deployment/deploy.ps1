param(
    [Parameter(Mandatory=$true)]
    $resourceGroupName,
    [Parameter(Mandatory=$true)]
    $location
)

$TenantId = (Get-AzureRmSubscription -SubscriptionName "Visual Studio Professional").TenantId
$ApplicationId = (Get-AzureRmADApplication -DisplayNameStartWith SuperA).ApplicationId

 $Thumbprint = (Get-ChildItem cert:\CurrentUser\My\ | Where-Object {$_.Subject -match "CN=SuperAScriptCert" }).Thumbprint | Out-String
 Connect-AzureRmAccount -ServicePrincipal `
  -CertificateThumbprint $Thumbprint `
  -ApplicationId $ApplicationId `
  -TenantId $TenantId

New-AzureRmResourceGroup -Name $resourceGroupName -Location $location
New-AzureRmResourceGroupDeployment -ResourceGroupName $resourceGroupName `
-TemplateFile azuredeployment.json -TemplateParameterFile dev.parameters.json