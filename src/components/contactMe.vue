<template>
        <div class="rounded-lg bg-[#8C8C8C] bg-opacity-85 p-6 items-center w-full flex flex-col lg:p-12">
                    <div class="flex flex-col items-center lg:text-2xl lg:w-2/6">
                        <input type="text" id="fullname" v-model="fullname" placeholder="Full name..." required minlength="5" maxlength="30"
                        class="w-full text-black text-md py-2 pl-2 mb-4 placeholder-black border-b border-[#D4AF37] bg-transparent"><br>
                        <input type="text" id="email" v-model="email" placeholder="Email..." required minlength="8" maxlength="50"
                                class="w-full text-black text-md py-2 pl-2 mb-4 placeholder-black border-b border-[#D4AF37] bg-transparent"><br>
                        <input type="text" id="subject" v-model="subject" placeholder="Subject..." required minlength="8" maxlength="20"
                            class="w-full text-black text-md py-2 pl-2 mb-4 placeholder-black border-b border-[#D4AF37] bg-transparent"><br>
                        <textarea type="text" id="message" v-model="message" placeholder="Message..." required rows="5" minlength="15" max-length="150"
                            class="w-full text-black text-md py-2 pl-2 mb-8 placeholder-black border-b border-[#D4AF37] bg-transparent resize-none" /><br>
                            <button @click="sendMail" :disabled="isClicked" class="font-bold p-4 bg-[#D4AF37] rounded-lg transition ease-linear delay-150 hover:translate-y-1 hover:scale-[1.15] hover:bg-opacity-80 duration-300 w-full lg:w-2/3">
                                Send
                            </button>
                    </div>
    </div>  
</template>

<script>
import { MailSender } from '../services'
export default {
    name: 'projects',
    data() {
    return {
        fullname: '',
        email: '',
        subject: '',
        message: '',
        isClicked: false,
        }
    },
    methods: {
        async sendMail() {
            this.isClicked = true;
            try {
                if (this.fullname.length < 5 || this.email < 8 || this.subject < 8 || this.message < 15) {
                    throw new Error('Too short params.')
                }
                let success = await MailSender.sendMail(this.fullname, this.email, this.subject, this.message)
                if (success) {
                    alert("Email sent.")
                    this.fullname = '';
                    this.email = '';
                    this.subject = '';
                    this.message = '';
                }
            } catch (e) {
                this.isClicked = false;
                alert("Email not sent. Try again!")
                console.error(e.name + ":", e.message);
            }
        }
    },

}
</script>