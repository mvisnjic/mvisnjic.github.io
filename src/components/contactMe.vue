<template>
        <div class="rounded-lg bg-gray-500 lg:text-lg bg-opacity-50 p-6 items-center w-full flex flex-col lg:p-12">
            <div class="flex flex-col items-center lg:text-xl">
                    <input type="text" id="fullname" v-model="fullname" placeholder="Full name..." required minlength="3" maxlength="20"
                        class="w-full text-black text-md py-2 pl-2 mb-4 placeholder-black border-b border-[#D4AF37] bg-transparent transition ease-in-out delay-150 hover:translate-y-1 hover:scale-[1.15] hover:bg-opacity-80 duration-300"><br>
                        <input type="text" id="email" v-model="email" placeholder="Email..." required minlength="8" maxlength="50"
                            class="w-full text-black text-md py-2 pl-2 mb-4 placeholder-black border-b border-[#D4AF37] bg-transparent transition ease-in-out delay-150 hover:translate-y-1 hover:scale-[1.15] hover:bg-opacity-80 duration-300"><br>
                    <input type="text" id="subject" v-model="subject" placeholder="Subject..." required minlength="10"
                        class="w-full text-black text-md py-2 pl-2 mb-4 placeholder-black border-b border-[#D4AF37] bg-transparent transition ease-in-out delay-150 hover:translate-y-1 hover:scale-[1.15] hover:bg-opacity-80 duration-300"><br>
                    <textarea type="text" id="message" v-model="message" placeholder="Message..." required rows="5" minlength="15" max-length="150"
                        class="w-full text-black text-md py-2 pl-2 mb-8 placeholder-black border-b border-[#D4AF37] bg-transparent resize-none transition ease-in-out delay-75 hover:translate-y-1 hover:scale-[1.15] hover:bg-opacity-80 duration-300" /><br>
                    <button @click="sendMail" class="font-bold p-4 bg-[#D4AF37] rounded-lg transition ease-linear delay-150 hover:translate-y-1 hover:scale-[1.25] hover:bg-opacity-80 duration-300">
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
        }
    },
    methods: {
        async sendMail() {
            try {
                let success = await MailSender.sendMail(this.fullname, this.email, this.subject, this.message)
                if (success == true) {
                    alert("Email sent.")
                }
            } catch {
                throw new Error('Email not sent.')
            }
        }
    },

}
</script>