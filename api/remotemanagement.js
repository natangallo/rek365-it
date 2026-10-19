export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    "Servers": [
      {
        "Version": "mdm-byod",
        "BaseURL": "https://manage.microsoft.com/EnrollmentServer/PostReportDeviceInfoForUEV2?aadTenantId=040321ab-667f-465e-a41b-de4c52fa6b88"
      }
    ]
  });
}