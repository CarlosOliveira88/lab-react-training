import { useState } from 'react';
import { FormGroup, Label, Input, Form, Container } from 'reactstrap';

function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nationality, setNationality] = useState('en');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNationalityChange = (e) => {
        setNationality(e.target.value);
    };

    const isEmailValid = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const isPasswordStrong = () => {
        return password.length >= 6;
    };

    return (
        <Container>
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        className={isEmailValid() ? 'is-valid' : 'is-invalid'}
                    />
                    {isEmailValid() ? (
                        <div className="valid-feedback">Valid Email</div>
                    ) : (
                        <div className="invalid-feedback">Invalid Email</div>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className={isPasswordStrong() ? 'is-valid' : 'is-invalid'}
                    />
                    {isPasswordStrong() ? (
                        <div className="valid-feedback">Strong Password</div>
                    ) : (
                        <div className="invalid-feedback">Weak Password</div>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="nationality">Nationality</Label>
                    <Input
                        type="select"
                        name="nationality"
                        id="nationality"
                        value={nationality}
                        onChange={handleNationalityChange}
                    >
                        <option value="en">English</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                    </Input>
                </FormGroup>
                <p>
                    {nationality === 'en'
                        ? 'Hello! Your email is '
                        : nationality === 'de'
                            ? 'Hallo! Ihre E-Mail lautet '
                            : 'Bonjour! Votre email est'}{' '}
                    {email}
                </p>
            </Form>
        </Container>
    );
}

export default SignupPage;
