"use client";

import { useEffect, useState, type ReactNode } from "react";

type RackItemType = "display" | "patch" | "switch" | "server";

type RackItem = {
  name: string;
  type: RackItemType;
  role: string;
  specs: string;
};

type ApItem = {
  name: string;
  role: string;
  specs: string;
};

type RackLayout = {
  ap: ApItem;
  items: readonly RackItem[];
  external: RackItem;
};

const itemShell = "bg-background px-3 py-2";
const itemBorder = "border border-border";
const deviceFace = "border border-border bg-[#141414]";
const metaText = "font-mono text-xs";
const itemLabel = `text-center ${metaText} text-foreground`;
const sectionLabel = `mb-3 ${metaText} uppercase tracking-widest text-muted`;
const outerBox =
  "rounded-sm border border-dashed border-border bg-surface p-3";
const rackFrame =
  "flex flex-col gap-1.5 overflow-visible border-2 border-accent/35 bg-[#0d0d0d] p-1";

function RackSlotHover({
  item,
  activeId,
  onToggle,
  children,
}: {
  item: RackItem;
  activeId: string | null;
  onToggle: (name: string) => void;
  children: ReactNode;
}) {
  const isActive = activeId === item.name;

  return (
    <div
      className="group/slot relative max-sm:cursor-pointer"
      onClick={(event) => {
        if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          return;
        }
        event.stopPropagation();
        onToggle(item.name);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle(item.name);
        }
      }}
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      aria-label={`${item.name} specs`}
    >
      {children}
      <div
        role="tooltip"
        className={`pointer-events-none absolute z-20 rounded-sm border border-accent/30 bg-surface px-2.5 py-1.5 ${metaText} leading-normal text-foreground opacity-0 shadow-[0_4px_16px_rgba(0,0,0,0.45)] transition-opacity ${
          isActive ? "max-sm:opacity-100" : ""
        } top-full right-0 left-0 mt-1.5 sm:top-1/2 sm:right-auto sm:left-[calc(100%+0.5rem)] sm:mt-0 sm:w-max sm:max-w-56 sm:-translate-y-1/2 sm:group-hover/slot:opacity-100`}
      >
        <p className="mb-1 font-bold text-foreground">{item.role}</p>
        <p className="text-foreground/90">{item.specs}</p>
      </div>
    </div>
  );
}

function slotClass(isActive: boolean) {
  return `${itemBorder} transition-colors sm:cursor-default ${
    isActive ? "max-sm:border-accent" : ""
  } sm:group-hover/slot:border-accent`;
}

function ApSideMount({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) {
  return (
    <div
      className={`rounded-sm ${itemShell} px-2 py-2 ${slotClass(isActive)}`}
    >
      <div className="mx-auto w-[4.5rem]">
        <div
          className={`overflow-hidden rounded-t-full border border-b-0 ${deviceFace}`}
        >
          <div className="h-3" />
          <div className="flex justify-center pb-1">
            <span
              className="h-1 w-1 rounded-full bg-accent shadow-[0_0_4px_var(--accent)]"
              aria-hidden
            />
          </div>
        </div>
        <div className="h-px w-full bg-border" />
        <p className={`mt-1 ${itemLabel}`}>{name}</p>
      </div>
    </div>
  );
}

function DisplaySlot({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) {
  return (
    <div className={`${itemShell} ${slotClass(isActive)}`}>
      <div className={`mx-auto mb-1.5 h-8 rounded-sm ${deviceFace}`} />
      <p className={itemLabel}>{name}</p>
    </div>
  );
}

function PatchSlot({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) {
  return (
    <div className={`${itemShell} ${slotClass(isActive)}`}>
      <div className="flex justify-center gap-0.5">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="h-3 w-0.5 rounded-full bg-muted/60"
            aria-hidden
          />
        ))}
      </div>
      <p className={`mt-1.5 ${itemLabel}`}>{name}</p>
    </div>
  );
}

function SwitchSlot({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) {
  return (
    <div className={`${itemShell} ${slotClass(isActive)}`}>
      <div className="flex items-center justify-center gap-1">
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className={`h-1.5 w-1.5 rounded-full ${
              index === 0 ? "bg-accent shadow-[0_0_4px_var(--accent)]" : "bg-muted/50"
            }`}
            aria-hidden
          />
        ))}
      </div>
      <p className={`mt-1.5 ${itemLabel}`}>{name}</p>
    </div>
  );
}

function ServerSlot({
  name,
  isActive,
}: {
  name: string;
  isActive: boolean;
}) {
  return (
    <div className={`${itemShell} ${slotClass(isActive)}`}>
      <div className={`relative mx-auto h-5 w-14 rounded-sm ${deviceFace}`}>
        <span
          className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_4px_var(--accent)]"
          aria-hidden
        />
      </div>
      <p className={`mt-1.5 ${itemLabel}`}>{name}</p>
    </div>
  );
}

function RackSlot({
  item,
  activeId,
  onToggle,
}: {
  item: RackItem;
  activeId: string | null;
  onToggle: (name: string) => void;
}) {
  const isActive = activeId === item.name;

  const content = (() => {
    switch (item.type) {
      case "display":
        return <DisplaySlot name={item.name} isActive={isActive} />;
      case "patch":
        return <PatchSlot name={item.name} isActive={isActive} />;
      case "switch":
        return <SwitchSlot name={item.name} isActive={isActive} />;
      case "server":
        return <ServerSlot name={item.name} isActive={isActive} />;
    }
  })();

  return (
    <RackSlotHover item={item} activeId={activeId} onToggle={onToggle}>
      {content}
    </RackSlotHover>
  );
}

function ServicesBox({
  item,
  activeId,
  onToggle,
}: {
  item: RackItem;
  activeId: string | null;
  onToggle: (name: string) => void;
}) {
  const isActive = activeId === item.name;

  return (
    <div className="w-full max-w-[13rem]">
      <div className={`${outerBox} overflow-visible`}>
        <p className={sectionLabel}>Other services</p>
        <RackSlotHover item={item} activeId={activeId} onToggle={onToggle}>
          <ServerSlot name={item.name} isActive={isActive} />
        </RackSlotHover>
      </div>
    </div>
  );
}

export function HomelabRack({ layout }: { layout: RackLayout }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!activeId) {
      return;
    }

    const close = () => setActiveId(null);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [activeId]);

  const handleToggle = (name: string) => {
    setActiveId((current) => (current === name ? null : name));
  };

  const apItem: RackItem = {
    name: layout.ap.name,
    type: "server",
    role: layout.ap.role,
    specs: layout.ap.specs,
  };

  return (
    <div>
      <div className="mt-5 flex flex-col items-start gap-6 overflow-visible sm:flex-row sm:items-start sm:gap-8">
        <div className="w-full max-w-[13rem] overflow-visible">
          <div className={`${outerBox} overflow-visible`}>
            <p className={sectionLabel}>Mini rack</p>
            <div className="overflow-visible">
              <div className="-mt-1 mb-1.5 flex justify-center overflow-visible">
                <RackSlotHover
                  item={apItem}
                  activeId={activeId}
                  onToggle={handleToggle}
                >
                  <ApSideMount
                    name={layout.ap.name}
                    isActive={activeId === layout.ap.name}
                  />
                </RackSlotHover>
              </div>
              <div className={rackFrame}>
                {layout.items.map((item) => (
                  <RackSlot
                    key={item.name}
                    item={item}
                    activeId={activeId}
                    onToggle={handleToggle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <ServicesBox
          item={layout.external}
          activeId={activeId}
          onToggle={handleToggle}
        />
      </div>
      <p className={`mt-3 mb-1 ${metaText} text-muted sm:hidden`}>
        Press an item for specs
      </p>
      <p className={`mt-3 mb-1 hidden ${metaText} text-muted sm:block`}>
        Hover over an item for specs
      </p>
    </div>
  );
}
