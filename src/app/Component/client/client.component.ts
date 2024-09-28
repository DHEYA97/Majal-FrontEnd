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
    { name: 'الريم للنظارات', image: '/images/clients/01.jpg' },
    { name: 'الناجم للخدمات البترولية', image: '/images/clients/02.jpg' },
    { name: 'الواجهات الابداعية للمقاولات', image: '/images/clients/03.jpg' },
    { name: 'شركة روشن للتجارة', image: '/images/clients/04.jpg' },
    { name: 'توفير وأكثر', image: '/images/clients/05.jpg' },
    { name: 'حلول الاتقان للاستشارات الهندسية', image: '/images/clients/06.jpg' },
    { name: 'شركة هدى الجزيرة للمقاولات', image: '/images/clients/07.jpg' },
    { name: ' صيدلية الصافي', image: '/images/clients/08.jpg' },
    { name: 'عصائر قصر الباشا', image: '/images/clients/09.jpg' },
    { name: 'فوال تراث الطائف', image: '/images/clients/10.jpg' },
    { name: 'لمسة انجاز للزجاج', image: '/images/clients/11.jpg' },
    { name: 'لورين بيوتي', image: '/images/clients/12.jpg' },
    { name: 'مجموعة مطاعم سنابل الحجاز', image: '/images/clients/13.jpg' },
    { name: 'مدارس بشائر الفتح', image: '/images/clients/14.jpg' },
    { name: 'مصنع حديد ابو سلطان', image: '/images/clients/15.jpg' },
    { name: 'مؤسسة الحبيب المتميز للزجاج', image: '/images/clients/16.jpg' },
    { name: 'نخبة التميز للعطور', image: '/images/clients/17.jpg' },
    { name: 'وكالة بحر المداد للدعاية والاعلان', image: '/images/clients/18.jpg' },
    { name: 'بنشر الجر لخدمات السيارات', image: '/images/clients/19.jpg' },
    { name: 'شركة الكف الابيض للتجارة', image: '/images/clients/20.jpg' },
    { name: 'شركة البرنس للتجارة', image: '/images/clients/21.jpg' },

  ];
}
