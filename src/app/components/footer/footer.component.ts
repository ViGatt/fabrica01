import { Component, AfterViewInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.initFooterMap();
  }

  private initFooterMap() {
    const mapa = document.querySelector('.mapa-estilizado');
    
    if (mapa) {
      mapa.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.className = 'map-tooltip';
        tooltip.textContent = 'Clique para abrir no Google Maps';
        document.body.appendChild(tooltip);
        
        const updatePosition = (e: MouseEvent) => {
          tooltip.style.left = `${e.pageX + 10}px`;
          tooltip.style.top = `${e.pageY + 10}px`;
        };
                
        mapa.addEventListener('mouseleave', () => {
          tooltip.remove();
          mapa.removeEventListener('mousemove', updatePosition as EventListener);
        });
      });
      
      mapa.addEventListener('click', (e) => {
        e.preventDefault();
        mapa.classList.add('clicked');
        setTimeout(() => {
          window.open('https://maps.google.com?q=Edsom+Da+Silva+Lima,Marília+SP', '_blank');
          mapa.classList.remove('clicked');
        }, 200);
      });
    }
  }
}