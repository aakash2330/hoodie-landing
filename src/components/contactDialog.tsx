import ContactPage from "@/app/contact/page"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
export default function ContactDialog(){

return <Dialog >
  <DialogTrigger>Contact Us</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogDescription>
          <ContactPage></ContactPage>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
}
