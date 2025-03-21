import { IconButton } from '@/components/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/input'
import {
  BadgeCheck,
  Copy,
  Link,
  Medal,
  MousePointer,
  MousePointerClick,
} from 'lucide-react'
import Image from 'next/image'
import logo from '../../assets/logo.svg'

export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-40 w-full max-w-[550px]">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição Confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para o seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-gray-200 font-xl font-heading font-semibold leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas e concorra a prêmios! Compartilhe o link e
              acompanhe as inscrições:
            </p>

            <InputRoot>
              <InputIcon>
                <Link className="size-5" />
              </InputIcon>
              <InputField
                readOnly
                defaultValue="http://localhost:3000/invite"
              />
              <IconButton className="-mr-2">
                <Copy className="size-5" />
              </IconButton>
            </InputRoot>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="relative bg-gray-700 border border-gray-600 px4 py-7 flex flex-col items-center justify-center gap-1 rounded-1xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                  1042
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                  Acessos ao link
                </span>
                <MousePointerClick className="size-5 text-purple absolute top-3 left-3" />
              </div>
              <div className="relative bg-gray-700 border border-gray-600 px4 py-7 flex flex-col items-center justify-center gap-1 rounded-1xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                  1042
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                  Inscrições feitas
                </span>
                <BadgeCheck className="size-5 text-purple absolute top-3 left-3" />
              </div>
              <div className="relative bg-gray-700 border border-gray-600 px4 py-7 flex flex-col items-center justify-center gap-1 rounded-1xl">
                <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                  1042
                </span>
                <span className="text-sm text-gray-300 leading-none text-center">
                  3¹
                </span>
                <Medal className="size-5 text-purple absolute top-3 left-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
