import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
} from './ui/radio-group'
import { X } from 'lucide-react'

export function CreateGoal() {
  return (
    <DialogContent>
      <div className="flex flex-col gap-6 h-full">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <DialogTitle>Cadastar meta</DialogTitle>
            <DialogClose>
              <X className="size-5 text-zinc-600" />
            </DialogClose>
          </div>
          <DialogDescription>
            Adicione atividades que te fazem bem e que você quer continuar
            praticando toda semana.
          </DialogDescription>
        </div>
        <form action="tes" className="flex-1 flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qual a atividade</Label>
              <Input
                id="title"
                autoFocus
                placeholder="Praticar exercicio,meditar, etc..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Qauantas vezes na semana</Label>
              <RadioGroup>
                <RadioGroupItem value="1">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-mediun leading-none">
                    1x na semana
                  </span>
                  <span className="text-lg leading-none">:)</span>
                </RadioGroupItem>
                <RadioGroupItem value="2">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-mediun leading-none">
                    2x na semana
                  </span>
                  <span className="text-lg leading-none">:)</span>
                </RadioGroupItem>
                <RadioGroupItem value="3">
                  <RadioGroupIndicator />
                  <span className="text-zinc-300 text-sm font-mediun leading-none">
                    3x na semana
                  </span>
                  <span className="text-lg leading-none">:)</span>
                </RadioGroupItem>
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DialogClose asChild>
              <Button className="flex-1" variant="secondary">
                Fechar
              </Button>
            </DialogClose>
            <Button className="flex-1">Salvar</Button>
          </div>
        </form>
      </div>
    </DialogContent>
  )
}
