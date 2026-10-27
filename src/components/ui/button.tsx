import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/** Botones de la campaña (docs/brief.md §13–14). */
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-full border-2 font-display font-extrabold whitespace-nowrap transition-[transform,background-color,box-shadow] duration-200 ease-out outline-none select-none hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-4 focus-visible:ring-golden focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-reduce:hover:translate-y-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  {
    variants: {
      variant: {
        primary: "border-transparent bg-coral text-white shadow-[0_6px_16px_rgba(240,79,61,0.28)] hover:bg-[#e2412f]",
        secondary: "border-transparent bg-forest text-cream hover:bg-[#123d2e]",
        outline: "border-forest bg-transparent text-forest hover:bg-forest-soft",
        "outline-light": "border-cream bg-transparent text-cream hover:bg-white/10",
        link: "border-0 h-auto rounded-none p-0 text-coral hover:translate-y-0 hover:underline",
      },
      size: {
        default: "h-[52px] px-6 text-base",
        sm: "h-12 px-5 text-[15px]",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
)

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
