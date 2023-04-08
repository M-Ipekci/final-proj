function MenuPage() {
  return (
    <div>
      <h2>Our Products</h2>

      <h2>Mediterranean Dishes</h2>
      <div className="menu-item">
        <img src="grilled-halloumi-salad-12-of-14.jpg" alt="Mediterranean Dish 1" />
        <div className="menu-item-info">
          <h3>Grilled Halloumi Salad</h3>
          <p>Grilled halloumi cheese, mixed greens, cherry tomatoes, cucumber, red onion, and a lemon-herb dressing</p>
          <span>$10.99</span>
        </div>
      </div>

      <div className="menu-item">
        <img src="Chicken-Shawarma-Plate-blog-2.webp" alt="Mediterranean Dish 2" />
        <div className="menu-item-info">
          <h3>Chicken Shawarma Plate</h3>
          <p>Marinated chicken breast, rice pilaf, hummus, tabbouleh, and pita bread</p>
          <span>$14.99</span>
        </div>
      </div>

      <div className="menu-item">
        <img src="gilled-lamb-kofta-kebabs-sq-018.jpg" alt="Mediterranean Dish 3" />
        <div className="menu-item-info">
          <h3>Lamb Kofta Kebab</h3>
          <p>Ground lamb seasoned with herbs and spices, grilled and served with a mint-yogurt sauce, rice, and roasted vegetables</p>
          <span>$16.99</span>
        </div>
      </div>
    </div>
  );
}