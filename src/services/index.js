import axios from 'axios'

const mailApi = axios.create({
    baseURL: 'https://mail.letseait.com/',
    timeout: 10000,
})

let MailSender = {
    async sendMail(fullname, email, subject, message) {
        let response = await mailApi.post(`/sendmail?fullname=${fullname}&sender=${email}&recipient=visnjicmatej@gmail.com&message=${message}&title=${subject}`, {
            fullname,
            email,
            subject,
            message,
        })
        let data = response.data;
        return data;
    }
}

export { mailApi, MailSender }