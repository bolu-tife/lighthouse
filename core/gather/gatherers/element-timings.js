/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import BaseGatherer from '../base-gatherer.js';

class ElementTimings extends BaseGatherer {
  static symbol = Symbol('ElementTimings');

  /** @type {LH.Gatherer.GathererMeta} */
  meta = {
    symbol: ElementTimings.symbol,
    supportedModes: ['timespan', 'navigation'],
  };

  /**
   * Creates an array of element-timings .
   * @param {LH.Gatherer.Context} context
   * @return {Promise<LH.Artifacts['ElementTimings']>}
   */
  async getArtifact(context) {
    // eslint-disable-next-line no-console
    console.log('context', context);
    return [];
  }
}

export default ElementTimings;
