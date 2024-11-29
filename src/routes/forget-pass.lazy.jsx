import React, { useState } from 'react';
import { Alert, Form, Button } from 'react-bootstrap';

const ForgetPass = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Data dummy untuk simulasi
    const dummyResponse = {
        success: true,
        message: 'Password reset successful. You can now log in.',
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');

        // Validasi password
        if (password.length < 8) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        // Menggunakan data dummy untuk simulasi
        try {
            // Simulasi delay menggunakan setTimeout
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 detik
            const response = dummyResponse;

            if (response.success) {
                setSuccessMessage(response.message);
            } else {
                setErrorMessage('Failed to reset password. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="forget-pass-container">
            <h2>Reset Password</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        isInvalid={password && password.length < 8}
                    />
                    <Form.Control.Feedback type="invalid">
                        Password must be at least 8 characters long.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        isInvalid={confirmPassword && confirmPassword !== password}
                    />
                    <Form.Control.Feedback type="invalid">
                        Passwords do not match.
                    </Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Reset Password
                </Button>
            </Form>
        </div>
    );
};

export default ForgetPass;
