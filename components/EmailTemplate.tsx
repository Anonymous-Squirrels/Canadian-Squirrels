import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone?: string;
  social?: string;
  website?: string;
  messageToTeam?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  messageToTeam,
  social,
  website,
}) => (
  <div>
    <p>Someone has filled up the contact form.</p>
    <h2>Name: {name}</h2>
    <h2>Email: {email}</h2>
    {phone && <h2>Phone: {phone}</h2>}
    {social && <h2>Socials: {social}</h2>}
    {website && <h2>Website: {website}</h2>}
    {messageToTeam && <h2>Message: {messageToTeam}</h2>}
  </div>
);

export default EmailTemplate;
