import { NextResponse } from 'next/server';

export const dynamic = 'error';
export const revalidate = false;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'soccer';
    const date = searchParams.get('date');
    const id = searchParams.get('id');

    if (!date) {
      return NextResponse.json({
        data: null,
        message: 'Parâmetro "date" é obrigatório no formato YYYY-MM-DD.'
      }, { status: 400 });
    }

    let fileName = `${type}-${date}`;
    if (id) {
      fileName += `-${id}`;
    }
    fileName += '.json';

    return NextResponse.redirect(new URL(`/api/picks/${fileName}`, request.url));
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar palpites' },
      { status: 500 }
    );
  }
}