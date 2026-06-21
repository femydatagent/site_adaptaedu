import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, whatsapp, schoolName, schoolYear, acceptedTerms } = body;

    if (!name || !email || !whatsapp || !schoolName || !schoolYear || !acceptedTerms) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido.' },
        { status: 400 }
      );
    }

    const supabase = getSupabase();
    const { error } = await supabase.from('demo_submissions').insert({
      name,
      email,
      whatsapp,
      school_name: schoolName,
      school_year: schoolYear,
      accepted_terms: true,
    });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json(
        { error: 'Erro ao salvar agendamento. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Erro interno. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
