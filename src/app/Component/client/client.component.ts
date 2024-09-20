import { Component } from '@angular/core';
import { SharedModuelModule } from '../../shared/shared-moduel/shared-moduel.module';
interface ClientItem {
  name: string;
  image: string;
}
@Component({
  selector: 'app-client',
  standalone: true,
  imports: [SharedModuelModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  items: ClientItem[] = [
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
    { name: 'شركة روشن للتجارة', image: '/images/logo-.png' },
    { name: 'شركة الكف الابيض', image: '/images/logo-.png' },
  ];
}
