import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email } = req.body;

  if (!email || !email.includes('@')) return res.status(400).json({ error: 'Invalid email' });

  const { error } = await supabase.from('emails').insert([{ email }]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(200).json({ message: 'Email guardado correctamente!' });
}
