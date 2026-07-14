import { useState } from 'react';
import axios from 'axios';

export function Contact() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      subject: String(form.get('subject') || ''),
      message: String(form.get('message') || ''),
    };

    try {
      // Placeholder base URL. Update in production.
      await axios.post('http://localhost:8080/api/contact', payload);
      setStatus('success');
      setMessage('Message sent successfully.');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setMessage('Failed to send message.');
    }
  }

  return (
    <section id="contact" className="border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 max-w-2xl text-secondaryText">Placeholder contact form.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm text-secondaryText">Name</span>
            <input name="name" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm text-secondaryText">Email</span>
            <input name="email" type="email" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm text-secondaryText">Subject</span>
            <input name="subject" required className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary" />
          </label>
          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm text-secondaryText">Message</span>
            <textarea name="message" required rows={5} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-primary" />
          </label>

          <div className="md:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-xl bg-primary px-6 py-3 text-sm font-medium text-black hover:brightness-110 disabled:opacity-70"
            >
              {status === 'loading' ? 'Sending...' : 'Send'}
            </button>
            {message ? <p className="text-sm text-secondaryText">{message}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}

