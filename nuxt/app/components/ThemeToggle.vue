<script setup lang="ts">
const theme = ref<'light' | 'dark'>('light');
const isOpen = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  theme.value = initialTheme;
  document.documentElement.setAttribute('data-theme', initialTheme);
});

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  theme.value = newTheme;
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  isOpen.value = false;
};
</script>

<template>
  <div>
    <button 
      class="toggle-button"
      @click="isOpen = !isOpen"
      aria-label="Toggle theme menu"
    >
      {{ theme === 'light' ? '☀️' : '🌙' }}
    </button>

    <div v-if="isOpen" class="overlay" @click="isOpen = false">
      <div class="menu" @click.stop>
        <h2>Choose Theme</h2>
        <button 
          :class="['theme-option', { active: theme === 'light' }]"
          @click="toggleTheme"
        >
          <span class="icon">☀️</span>
          <span>Light Mode</span>
        </button>
        <button 
          :class="['theme-option', { active: theme === 'dark' }]"
          @click="toggleTheme"
        >
          <span class="icon">🌙</span>
          <span>Dark Mode</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle-button {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background: var(--background);
  border: 2px solid var(--foreground);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.toggle-button:hover {
  transform: translateX(-50%) scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.menu {
  background: var(--background);
  border-radius: 16px;
  padding: 32px;
  min-width: 300px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.menu h2 {
  margin: 0 0 24px 0;
  color: var(--foreground);
  font-size: 24px;
  text-align: center;
}

.theme-option {
  width: 100%;
  padding: 16px 20px;
  margin: 8px 0;
  background: transparent;
  border: 2px solid var(--foreground);
  border-radius: 8px;
  color: var(--foreground);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.2s ease;
}

.theme-option:hover {
  background: var(--foreground);
  color: var(--background);
  transform: translateX(4px);
}

.theme-option.active {
  background: var(--foreground);
  color: var(--background);
}

.icon {
  font-size: 24px;
}
</style>
