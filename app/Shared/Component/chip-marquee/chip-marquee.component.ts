import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-chip-marquee',
  templateUrl: './chip-marquee.component.html',
  styleUrls: ['./chip-marquee.component.scss'],
  standalone: false
})
export class ChipMarqueeComponent {
  /** Rows of chips — each row scrolls independently */
  rows = input<
    Array<{
      items: Array<{ type: string; label?: string; labelKey?: string }>;
      direction?: string;
      durationSec?: number;
    }>
  >([]);

  /** How many times to duplicate each row for seamless looping */
  loopCopies = input(2);

  /** Accessible label for the hidden skill list */
  ariaLabel = input('');

  /** `plain` = open layout; `banner` = charcoal strip for top marquee */
  appearance = input<'plain' | 'banner'>('plain');

  protected readonly loopIndices = computed(() =>
    Array.from({ length: Math.max(this.loopCopies(), 1) }, (_, i) => i)
  );

  protected readonly skillLabels = computed(() =>
    this.rows().flatMap((row) =>
      row.items
        .filter((item) => item.type === 'skill' && item.label)
        .map((item) => item.label as string)
    )
  );

  protected rowDirection(
    row: { direction?: string },
    index: number
  ): 'forward' | 'reverse' {
    return row.direction === 'reverse' ? 'reverse' : row.direction === 'forward' ? 'forward' : index % 2 === 0 ? 'forward' : 'reverse';
  }

  protected rowDuration(row: { durationSec?: number }): number {
    return row.durationSec ?? 32;
  }

  protected isCategory(item: {
    type: string;
    labelKey?: string;
  }): item is { type: 'category'; labelKey: string } {
    return item.type === 'category' && Boolean(item.labelKey);
  }

  protected chipLabel(item: { label?: string }): string | null {
    return item.label ?? null;
  }
}
