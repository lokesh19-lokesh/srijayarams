<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "support@srijayarama.com";
    $subject = "New Form Submission - Sri Jayarama";
    
    // Collect form data
    $name = $_POST['name'] ?? 'Not provided';
    $email = $_POST['email'] ?? 'Not provided';
    $mobile = $_POST['mobile'] ?? 'Not provided';
    $purpose = $_POST['purpose'] ?? 'Not provided';
    $message = $_POST['message'] ?? 'Not provided';
    $jobRole = $_POST['jobRole'] ?? ''; // Specific to Job Application

    // Construct Email Body
    $body = "You have received a new message from your website form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Mobile: $mobile\n";
    if (!empty($jobRole)) {
        $body .= "Applying For: $jobRole\n";
        $subject = "New Job Application: $jobRole";
    }
    if ($purpose !== 'Not provided') {
        $body .= "Purpose: $purpose\n";
    }
    $body .= "Message:\n$message\n";

    // Handle File Attachment (Resume)
    $headers = "From: no-reply@srijayarama.com";
    
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] == UPLOAD_ERR_OK) {
        $file_tmp_name = $_FILES['resume']['tmp_name'];
        $file_name = $_FILES['resume']['name'];
        $file_size = $_FILES['resume']['size'];
        $file_type = $_FILES['resume']['type'];
        
        $handle = fopen($file_tmp_name, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));
        
        $boundary = md5("random");
        
        // Headers for attachment
        $headers .= "\r\nMIME-Version: 1.0\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary = $boundary\r\n\r\n";
        
        // Plain text body
        $message_body = "--$boundary\r\n";
        $message_body .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $message_body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $message_body .= "$body\r\n";
        
        // Attachment
        $message_body .= "--$boundary\r\n";
        $message_body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $message_body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $message_body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $message_body .= "$encoded_content\r\n";
        $message_body .= "--$boundary--";
        
        $body = $message_body; // Override body with multipart body
    } else {
        // Simple text email if no attachment
        $headers .= "\r\nReply-To: $email";
    }

    // Send Email
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send email."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
