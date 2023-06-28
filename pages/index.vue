<template>
	<div class="p-4 border border-black border-dashed rounded flex flex-col gap-2">
		<div>
			<span class="mb-1">Цвета кнопок:</span>
			<div class="flex gap-2">
				<Button type="button" v-for="color in ['dark', 'blue', 'green', 'purple', 'pink', 'red', 'yellow']"
					:color="color">кнопка</Button>
			</div>
		</div>
		<div>
			<span class="mb-1">hover кнопок:</span>
			<div class="flex gap-2">
				<Button type="button" v-for="hover in ['dark', 'blue', 'green', 'purple', 'pink', 'red', 'yellow']"
					:hover="hover">кнопка</Button>
			</div>
		</div>
		<div>
			<span class="mb-1">Размер кнопок:</span>
			<div class="flex gap-2 items-center">
				<Button type="button" v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :size="size">кнопка</Button>
			</div>
		</div>
		<div>
			<span class="mb-1">скругление кнопок:</span>
			<div class="flex gap-2 items-center">
				<Button type="button" v-for="rounded in ['sm', 'md', 'lg', 'xl', 'full']" :rounded="rounded">кнопка</Button>
			</div>
		</div>
		<div>
			<span class="mb-1">вид кнопок:</span>
			<div class="flex gap-2 items-center">
				<Button type="button" v-for="decoration in ['outline', 'gradient', 'default']"
					:decoration="decoration">кнопка</Button>
			</div>
		</div>
		<div>
			<span class="mb-1">тип кнопоки:</span>
			<div class="flex gap-2 items-center">
				<Button type="button" v-for="category in ['default', 'square']" :category="category">
					<Icon v-if="category == 'square'" name="mdi:reload"></Icon>
					<span v-else>кнопка</span>
				</Button>
			</div>
		</div>
		<div>
			<span class="mb-1">иконки кнопки:</span>
			<div class="flex gap-2 items-center">
				<Button type="button" class="min-w-[120px]"
					v-for="icon in ['слева', 'справа', 'слева и справа', 'без иконки']">
					<template #prefix v-if="icon == 'слева' || icon == 'слева и справа'">
						<Icon name="mdi:reload"></Icon>
					</template>
					кнопка
					<template #suffix v-if="icon == 'справа' || icon == 'слева и справа'">
						<Icon name="mdi:reload"></Icon>
					</template>
				</Button>
			</div>
		</div>
	</div>
	<div class="text-black dark:text-white">
		<FormKit type="form" #default="{ value }" :actions="false">
			<div class="flex gap-2 items-center">
				<FormKit innerClass="w-[150px]" type="select" name="color" label="цвет кнопки">
					<option value="dark">темный</option>
					<option value="blue">синий</option>
					<option value="green">зеленый</option>
					<option value="purple">фиолетовый</option>
					<option value="pink">розовый</option>
					<option value="red">красный</option>
					<option value="yellow">желтый</option>
				</FormKit>
				<FormKit innerClass="w-[150px]" type="select" name="size" label="Размер кнопки">
					<option>xs</option>
					<option>sm</option>
					<option>md</option>
					<option>lg</option>
					<option>xl</option>
				</FormKit>
				<FormKit innerClass="w-[150px]" type="select" name="rounded" label="Скругление кнопки">
					<option>xs</option>
					<option>sm</option>
					<option>md</option>
					<option>lg</option>
					<option>xl</option>
					<option>default</option>
					<option>full</option>
				</FormKit>
				<FormKit innerClass="w-[150px]" type="select" name="decoration" label="вид кнопки">
					<option>default</option>
					<option>outline</option>
					<option>gradient</option>
				</FormKit>
				<FormKit innerClass="w-[150px]" type="select" name="icon" label="иконка на кнопке">
					<option>слева</option>
					<option>справа</option>
					<option>слева и справа</option>
					<option>без иконки</option>
				</FormKit>
				<FormKit innerClass="w-[150px]" type="select" name="category" label="тип кнопки">
					<option>default</option>
					<option>square</option>
				</FormKit>
				<Button type="button" v-bind="value">
					<template #prefix v-if="value.icon == 'слева' || value.icon == 'слева и справа'">
						<Icon name="mdi:reload"></Icon>
					</template>
					кнопка
					<template #suffix v-if="value.icon == 'справа' || value.icon == 'слева и справа'">
						<Icon name="mdi:reload"></Icon>
					</template>
				</Button>
			</div>
		</FormKit>
	</div>
</template>

<script setup>
</script>

