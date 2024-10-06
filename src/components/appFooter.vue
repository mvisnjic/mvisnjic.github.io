<template>
    <div
        class="flex flex-col border-t lg:mx-52 border-[#D4AF37] w-3/3 opacity-75 items-center lg:items-start p-4"
    >
    <button class="lg:hidden self-end m-2 mb-2" @click.prevent="goUp">
        <img src="../static/uparrow.png" alt="" class="w-12 h-12">
    </button>
        <div class="self-center text-[15px] text-[#D4AF37]">© 2023. Matej Visnjic</div>
    </div>
</template>

<script>
export default {
    name: 'appFooter',
    methods: {
        goUp() {
            window.scrollTo(0, 0);
        }
    },
}
</script>