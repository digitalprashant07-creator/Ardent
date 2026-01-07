'use client'

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

type PhoneNumberInputProps = {
  value?: string
  onChange: (value?: string) => void
}

export default function PhoneNumberInput({
  value,
  onChange,
}: PhoneNumberInputProps) {
  return (
    <PhoneInput
      defaultCountry="US"
      value={value}
      onChange={onChange}
      className="phone-input [&>input]:w-full [&>input]:bg-transparent [&>input]:outline-none [&>input]:text-slate-900 [&>input]:placeholder:text-gray-400"
    />
  )
}
