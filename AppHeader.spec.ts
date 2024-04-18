import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";

describe('AppHeader', () => {
    const AppHeaderWrapper = mount(AppHeader);

    it('should render correctly', () => {
        expect(AppHeaderWrapper.exists()).toBe(true);
      })

    it('should have the text', () => {
        expect(AppHeaderWrapper.text()).toBe("Expense Tracker");
    })
})