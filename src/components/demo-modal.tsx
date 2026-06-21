'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface DemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type SchoolYear = 'pref' | 'fundamental' | 'medio';

export default function DemoModal({ open, onOpenChange }: DemoModalProps) {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [schoolYear, setSchoolYear] = useState<SchoolYear | ''>('');
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const formatWhatsapp = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits.length ? `(${digits}` : '';
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsapp(e.target.value);
    setWhatsapp(formatted);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!email.trim()) newErrors.email = 'Email é obrigatório';
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) newErrors.email = 'Email inválido';
    }
    if (!whatsapp.replace(/\D/g, '').length) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!schoolName.trim()) newErrors.schoolName = 'Nome da escola é obrigatório';
    if (!schoolYear) newErrors.schoolYear = 'Selecione o ano';
    if (!accepted) newErrors.terms = 'Você deve aceitar os termos';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch('/api/demo-submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          whatsapp,
          schoolName,
          schoolYear: {
            pref: 'Pré-escola',
            fundamental: '1º – 9º ano',
            medio: 'Ensino Médio',
          }[schoolYear],
          acceptedTerms: true,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast({
          variant: 'destructive',
          title: 'Erro ao agendar',
          description: data.error || 'Tente novamente mais tarde.',
        });
      } else {
        toast({
          title: 'Demo agendada!',
          description: 'Entraremos em contato em até 24h.',
        });
        setName('');
        setEmail('');
        setWhatsapp('');
        setSchoolName('');
        setSchoolYear('');
        setAccepted(false);
        setErrors({});
        onOpenChange(false);
      }
    } catch {
      toast({
        variant: 'destructive',
        title: 'Erro ao agendar',
        description: 'Erro interno. Tente novamente mais tarde.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agendar demonstração gratuita</DialogTitle>
          <DialogDescription className="text-sm">
            Preencha os campos abaixo e nossa equipe entrará em contato em até 24h.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Nome */}
          <div className="space-y-1.5">
            <Label htmlFor="demo-name">Nome *</Label>
            <Input
              id="demo-name"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? 'ring-1 ring-destructive' : ''}
            />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="demo-email">Email *</Label>
            <Input
              id="demo-email"
              type="email"
              placeholder="email@escola.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? 'ring-1 ring-destructive' : ''}
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>

          {/* WhatsApp */}
          <div className="space-y-1.5">
            <Label htmlFor="demo-whatsapp">WhatsApp *</Label>
            <Input
              id="demo-whatsapp"
              type="tel"
              placeholder="(11) 99999-9999"
              value={whatsapp}
              onChange={handleWhatsappChange}
              maxLength={15}
              className={errors.whatsapp ? 'ring-1 ring-destructive' : ''}
            />
            {errors.whatsapp && <p className="text-xs text-destructive">{errors.whatsapp}</p>}
          </div>

          {/* Nome da escola */}
          <div className="space-y-1.5">
            <Label htmlFor="demo-school">Nome da escola *</Label>
            <Input
              id="demo-school"
              type="text"
              placeholder="Nome da escola"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              className={errors.schoolName ? 'ring-1 ring-destructive' : ''}
            />
            {errors.schoolName && <p className="text-xs text-destructive">{errors.schoolName}</p>}
          </div>

          {/* Ano */}
          <div className="space-y-1.5">
            <Label htmlFor="demo-year">Ano que dá aula *</Label>
            <select
              id="demo-year"
              value={schoolYear}
              onChange={(e) => setSchoolYear(e.target.value as SchoolYear)}
              className="flex h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm aria-invalid:ring-destructive/20 aria-invalid:border-destructive text-muted-foreground"
            >
              <option value="">Selecione...</option>
              <option value="pref">Pré-escola</option>
              <option value="fundamental">1º – 9º ano do Ensino Fundamental</option>
              <option value="medio">Ensino Médio</option>
            </select>
            {errors.schoolYear && <p className="text-xs text-destructive">{errors.schoolYear}</p>}
          </div>

          {/* Terms */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-start gap-2.5">
              <Checkbox
                id="demo-terms"
                checked={accepted}
                onCheckedChange={(checked) => setAccepted(checked === true)}
                className="mt-0.5"
              />
              <Label htmlFor="demo-terms" className="text-xs font-normal leading-relaxed text-muted-foreground">
                Li e concordo com os{' '}
                <a href="#" className="underline underline-offset-4 text-foreground hover:text-amber-600">
                  Termos de Uso
                </a>{' '}
                e a{' '}
                <a href="#" className="underline underline-offset-4 text-foreground hover:text-amber-600">
                  Política de Privacidade
                </a>{' '}
                do AdaptaEDU. *
              </Label>
            </div>
            {errors.terms && <p className="text-xs text-destructive">{errors.terms}</p>}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold"
            disabled={submitting}
          >
            {submitting ? 'Enviando...' : 'Agendar demonstração'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
