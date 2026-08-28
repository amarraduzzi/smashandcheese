import React, { useState } from 'react';
import { CartProvider } from './components/cart/CartContext';
import { CategoryNav } from './components/layout/CategoryNav';
import { MenuSection } from './components/menu/MenuSection';
import { ItemModal } from './components/menu/ItemModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { FloatingCartBar } from './components/cart/FloatingCartBar';
import { categories, menuItems } from './data/menu';
import type { Language, MenuItem } from './types';

interface Props {
  language: Language;
}

// The in-page WhatsApp order experience, mounted as a client-side island on
// /menu (and its EN/AR equivalents) — see src/pages/menu.astro. This is the
// real "add to cart, then send via WhatsApp" flow: not a link to a separate
// site. Ported from the Amplify Menu Engine boilerplate's cart/checkout
// layer (untouched — see src/order/components) with only src/order/config/
// brand.config.ts swapped in as a thin adapter over the marketing site's
// own site.config.ts, so there is exactly one place (site.config.ts) that
// still needs editing per client.
export default function OrderApp({ language }: Props) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id ?? '');
  const [openItem, setOpenItem] = useState<MenuItem | null>(null);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) ?? categories[0];
  const activeItems = menuItems.filter((i) => i.categoryId === activeCategory?.id);

  return (
    <CartProvider>
      <CategoryNav
        categories={categories}
        activeCategoryId={activeCategoryId}
        onSelect={setActiveCategoryId}
        language={language}
      />

      {activeCategory && (
        <MenuSection category={activeCategory} items={activeItems} language={language} onOpenItem={setOpenItem} />
      )}

      <ItemModal item={openItem} language={language} onClose={() => setOpenItem(null)} />
      <CartDrawer language={language} allItems={menuItems} onOpenItem={setOpenItem} />
      <FloatingCartBar language={language} />
    </CartProvider>
  );
}
