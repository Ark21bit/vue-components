<template>
    <ClientOnly>
        <Teleport to="body">
            <Transition enter-from-class="opacity-0" leave-to-class="opacity-0"
                enter-active-class="transition-opacity duration-500 easy-linear"
                leave-active-class="transition-opacity duration-500 easy-linear">
                <div @click.self="closeModal" :class="ModalOverlayClass" v-if="isShow">
                    <div :class="ModalClass" v-bind="$attrs">
                        <Button color="grayscale" type="iconBtn" @click="closeModal"
                            class="absolute right-0 top-0"><nuxt-icon name="feather-icon/x" /></Button>
                        <slot />
                    </div>
                </div>
            </Transition>
        </Teleport>
    </ClientOnly>
</template>

<script setup>
defineOptions({
    inheritAttrs: false,
})

const emit = defineEmits(['close'])

const { ModalOverlayClass: ModalOverlayClassProps, noDefaultAttrsClass, size } = defineProps({
    ModalOverlayClass: { type: String },
    noDefaultAttrsClass: { type: Boolean, default: false },
    isShow: { type: Boolean, default: false },
    size: { type: [String, Boolean], default: 'xs' }
})

const { checkDefaultClass } = useHelper()

const ModalOverlayClass = ref([
    checkDefaultClass(ModalOverlayClassProps, 'fixed inset-0 bg-primaryMuted/80',)
])

const modalWrapperClasses = {
    size: {
        xs: 'px-25 py-15 w-[600px]'
    }

}

const ModalClass = ref([
    noDefaultAttrsClass || 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded bg-white shadow-xs shadow-primary',
    size && modalWrapperClasses.size[size]
])




const closeModal = () => {
    emit('close')
}
</script>

