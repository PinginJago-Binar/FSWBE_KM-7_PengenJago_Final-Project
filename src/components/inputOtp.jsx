import * as React from "react";
//import { OTPInput, OTPInputContext } from "inputOtp"; 
import { Dot } from "lucide-react";

import { cn } from "@/lib/utils"; 

// InputOTP Component
const inputOTP = React.forwardRef(
  (props, ref) => (
    <OTPInput
      ref={ref}
      containerClassName={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        props.containerClassName
      )}
      className={cn("disabled:cursor-not-allowed", props.className)}
      {...props}
    />
  )
);
inputOTP.displayName = "InputOTP";

// InputOTPGroup Component
const InputOTPGroup = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", props.className)}
    {...props}
  />
));
InputOTPGroup.displayName = "InputOTPGroup";

// InputOTPSlot Component
const InputOTPSlot = React.forwardRef(({ index, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        props.className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

// InputOTPSeparator Component
const InputOTPSeparator = React.forwardRef((props, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

// Export Components
export { inputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };