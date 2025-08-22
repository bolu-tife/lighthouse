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
   * @return {Promise<Array<Required<LH.TraceEvent['args']>['data']>>}
   */
  static async compute_(trace, context) {
    const processedTrace = await ProcessedTrace.request(trace, context);
    const traceEvents = processedTrace.mainThreadEvents;

    /** @type {Array<Required<LH.TraceEvent['args']>['data']>} */
    const elementTimings = [];

    traceEvents
    .filter(event => event.name === 'PerformanceElementTiming' && event.args.data)
    .map(event => {
      const data = event.args.data;

      elementTimings.push({
        identifier: data?.identifier,
        elementId: data?.elementId,
        elementType: data?.elementType,
        renderTime: data?.renderTime,
        loadTime: data?.loadTime,
        naturalWidth: data?.naturalWidth,
        naturalHeight: data?.naturalHeight,
        rectWidth: data?.rectWidth,
        rectHeight: data?.rectHeight,
        rectLeft: data?.rectLeft,
        rectTop: data?.rectTop,
        url: data?.url,
        name: event.name,
        nodeId: data?.nodeId,
      });
    });

    return elementTimings;
  }
}

const ElementTimingsComputed = makeComputedArtifact(ElementTimings, null);
export {ElementTimingsComputed as ElementTimings};
