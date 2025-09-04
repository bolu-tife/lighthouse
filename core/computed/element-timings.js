/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {ProcessedTrace} from './processed-trace.js';
import {makeComputedArtifact} from './computed-artifact.js';


class ElementTimings {
  /**
   * @param {LH.Trace} trace
   * @param {LH.Artifacts.ComputedContext} context
   */
  static async compute_(trace, context) {
    const processedTrace = await ProcessedTrace.request(trace, context);
    const traceEvents = processedTrace.mainThreadEvents;

    const elementTimings = [];
    for (const evt of traceEvents) {
      if (evt.name !== 'PerformanceElementTiming') continue;
      const data = evt.args && evt.args.data;
      if (!data) continue;

      elementTimings.push({
        ...data,
      });
    }
    return elementTimings;
  }
}

const ElementTimingsComputed = makeComputedArtifact(ElementTimings, null);
export {ElementTimingsComputed as ElementTimings};
